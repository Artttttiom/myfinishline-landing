import { useAppSelector } from "@/app/lib/hooks";
import { User } from "lucide-react";
import Image from "next/image";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import Xarrow from "react-xarrows";

type XarrowProps = React.ComponentProps<typeof Xarrow>;

interface ProgressArrowProps extends XarrowProps {
  progress: number;
  showProgressCircle?: boolean;
  circleColor?: string;
  circleRadius?: number;
  circleClassName?: string;
  showText?: boolean;
  textContent?: string;
}

const ProgressArrow: React.FC<ProgressArrowProps> = ({
  progress,
  showProgressCircle = true,
  circleColor = "#ff6b6b",
  circleRadius = 16,
  circleClassName = "",
  showText = true,
  textContent = "Test string",
  ...xarrowProps
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [circlePosition, setCirclePosition] = useState<{
    x: number;
    y: number;
    isRightSide: boolean;
  } | null>(null);
  const [svgReady, setSvgReady] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const getPointAtLengthSafely = (
    path: SVGPathElement,
    length: number,
  ): DOMPoint | null => {
    try {
      if (!path || path.getTotalLength() === 0) {
        return null;
      }

      const totalLength = path.getTotalLength();
      const clampedLength = Math.max(0, Math.min(totalLength, length));

      return path.getPointAtLength(clampedLength);
    } catch (error) {
      console.warn("Error getting point at length:", error);
      return null;
    }
  };

  const updateProgressAndCircle = () => {
    if (!wrapperRef.current) return;

    const path = wrapperRef.current.querySelector("path");
    const svg = wrapperRef.current.querySelector("svg");

    if (!path || !svg) {
      setCirclePosition(null);
      return;
    }

    try {
      const validatedProgress = Math.max(0, Math.min(100, progress));
      const length = path.getTotalLength();

      if (length === 0) {
        setCirclePosition(null);
        return;
      }

      const strokeLength = length * (validatedProgress / 100);

      path.style.strokeDasharray = `${strokeLength} ${length}`;
      path.style.strokeDashoffset = "0";

      if (
        showProgressCircle &&
        validatedProgress > 0 &&
        validatedProgress < 100
      ) {
        const point = getPointAtLengthSafely(path, strokeLength);

        if (point) {
          const svgPoint = svg.createSVGPoint();
          svgPoint.x = point.x;
          svgPoint.y = point.y;

          const ctm = svg.getScreenCTM();
          let globalX: number, globalY: number;

          if (ctm) {
            const globalPoint = svgPoint.matrixTransform(ctm);
            globalX = globalPoint.x;
            globalY = globalPoint.y;
          } else {
            const svgRect = svg.getBoundingClientRect();
            globalX = point.x + svgRect.left;
            globalY = point.y + svgRect.top;
          }

          const wrapperRect = wrapperRef.current.getBoundingClientRect();
          const x = globalX - wrapperRect.left;
          const y = globalY - wrapperRect.top;

          // Check if position is on right side of screen
          const screenWidth = window.innerWidth;
          const isRightSide = globalX > screenWidth / 2;

          setCirclePosition({ x, y, isRightSide });
        } else {
          setCirclePosition(null);
        }
      } else {
        setCirclePosition(null);
      }
    } catch (error) {
      console.warn("Error updating progress arrow:", error);
      setCirclePosition(null);
    }
  };

  useEffect(() => {
    const checkSvgReady = () => {
      if (wrapperRef.current) {
        const path = wrapperRef.current.querySelector("path");
        if (path && path.getTotalLength() > 0) {
          setSvgReady(true);
          return true;
        }
      }
      return false;
    };

    if (!checkSvgReady()) {
      const timer = setTimeout(() => {
        checkSvgReady();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  useLayoutEffect(() => {
    updateProgressAndCircle();
  }, [
    progress,
    svgReady,
    showProgressCircle,
    showText,
    xarrowProps.start,
    xarrowProps.end,
  ]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new MutationObserver((mutations) => {
      const shouldUpdate = mutations.some((mutation) => {
        return (
          mutation.type === "childList" ||
          (mutation.type === "attributes" &&
            (mutation.target as Element).closest("svg, path"))
        );
      });

      if (shouldUpdate) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            updateProgressAndCircle();
          });
        });
      }
    });

    observer.observe(wrapperRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["d", "style", "transform"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateProgressAndCircle();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Xarrow {...xarrowProps} />

      {circlePosition && showProgressCircle && (
        <div
          className="pr-2 absolute flex items-center gap-2 bg-black/50 rounded-full"
          style={{
            left: circlePosition.x,
            top: circlePosition.y,
            transform: `translate(-${circleRadius}px, -${circleRadius}px)`,
          }}
        >
          <div
            id="user-progress-icon"
            className={` border-white z-999 border-2 ${circleClassName}`}
            style={{
              width: circleRadius * 2,
              height: circleRadius * 2,
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              pointerEvents: "none",
              opacity: svgReady ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {user.full_avatar_url ? (
              <Image
                className="w-full h-full rounded-full"
                src={user.full_avatar_url}
                width={30}
                height={30}
                alt="User image"
              />
            ) : user.avatar_symbol ? (
              <div
                style={{ backgroundColor: user.avatar_color }}
                className="rounded-full w-full h-full flex items-center justify-center text-sm"
              >
                {user.avatar_symbol}
              </div>
            ) : (
              <div
                style={{ backgroundColor: user.avatar_color }}
                className="rounded-full w-full h-full flex items-center justify-center text-sm"
              >
                <User width={14} />
              </div>
            )}
          </div>
          <span className="text-white">{user.username || user.first_name}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressArrow;
