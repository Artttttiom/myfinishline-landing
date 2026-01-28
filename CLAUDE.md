# MyFinishLine - Правила разработки

## ЗАПРЕЩЕНО
- Создавать вложенные проекты внутри проекта
- Создавать альтернативные версии (Vite, CRA, другие фреймворки)
- Добавлять папки venv, .venv, env, __pycache__
- Создавать дубликаты компонентов
- Добавлять файлы вне структуры src/ и public/
- Создавать отдельные .css файлы (использовать Tailwind)

## Структура проекта (СТРОГО)
```
mfl_project/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Home page
│   │   └── globals.css
│   └── components/    # React компоненты
├── public/            # Статические файлы
├── package.json
├── next.config.ts
├── tsconfig.json
└── CLAUDE.md
```

## Tech Stack (НЕ МЕНЯТЬ без согласования)
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Lucide React (иконки)

## Правила кода

### Компоненты
- Один компонент = один файл в `src/components/`
- Имена файлов в PascalCase: `MyComponent.tsx`
- "use client" только при использовании useState, useEffect, событий браузера

### Стили
- Только Tailwind CSS классы
- CSS переменные в `globals.css`
- Не создавать отдельные .css/.scss файлы

### TypeScript
- Всегда типизировать props через interface
- Использовать `@/*` alias для импортов из src/

### Изображения
- Статические изображения в `public/`
- Использовать `next/image` для оптимизации
- Figma изображения через URL (текущий подход)

### Новые страницы
- Создавать в `src/app/[route]/page.tsx`
- Следовать App Router конвенциям Next.js

## Команды
```bash
npm run dev   # Запуск dev сервера (порт 3000)
npm run build # Production сборка
npm run lint  # Проверка кода
```

---

# Архитектура MyFinishLine (Frontend)

## Расположение проекта
- **Frontend**: `/Users/artiom/MyFinishLine-front/app/`
- **Landing**: `/Users/artiom/mfl_project/` (этот проект)

## Route Groups (Next.js App Router)
```
app/
├── (application)/     # Основное приложение
│   └── app/
│       ├── homepage/  # Главная после входа
│       ├── profile/   # Профиль пользователя
│       └── ...
├── (with-header)/     # Страницы с хедером
├── (without-header)/  # Страницы без хедера
└── (landing)/         # Лендинг
```
**Redirect**: `/app` → `/app/homepage`

---

## State Management (Redux Toolkit)

### Slices
| Slice | Назначение | Persist |
|-------|-----------|---------|
| `user` | Данные пользователя, токены | ✅ |
| `challenge` | Текущий челлендж, шаги, прогресс | ❌ |
| `activities` | История активностей | ✅ |
| `products` | Продукты магазина | ✅ |
| `leaderboard` | Таблица лидеров | ❌ |
| `profile` | Расширенный профиль | ✅ |

### ⚠️ ВАЖНО: Challenge НЕ персистится!
Challenge slice всегда загружается с сервера при входе. Не полагайтесь на кешированные данные челленджа.

---

## Компоненты карты (Map/)

### FogOfWar.tsx
Визуальный эффект "тумана войны" - скрывает непройденную часть карты.

**Особенности:**
- 11 слоёв CSS градиентов для эффекта пушистых облаков
- Динамический расчёт позиции на основе прогресса пользователя
- Анимации float-1, float-2, float-3 (30s, 35s, 40s)
- Mask градиенты для плавного перехода

**Расчёт позиции:**
```tsx
fogPosition = activeStep.y_coordinate + (progress * distanceToNextStep)
```

### RouteRenderer.tsx
Отрисовка маршрутов между точками на карте.

**Особенности:**
- Catmull-Rom сплайны для плавных кривых
- Динамическое масштабирование координат (scaleX, scaleY)
- Двухслойная отрисовка:
  1. Серый пунктир (фон)
  2. Цветной прогресс с анимацией
- `stroke-dashoffset` для анимации заполнения

### ProgressArrow.tsx (476 строк)
Анимированный кружок пользователя, движущийся по маршруту.

**Особенности:**
- `requestAnimationFrame` для плавной анимации
- Easing: `easeOutCubic`
- **SessionStorage** для сохранения состояния между страницами
- Автоматическая очистка старых записей (30 секунд)

### Step.tsx
Точки на карте (шаги челленджа).

**Состояния:**
- `completed` - пройден
- `active` - текущий
- `next` - следующий
- `locked` - заблокирован (в тумане)

---

## API Integration

### Axios Configuration
```tsx
// Retry interceptor
const retryConfig = {
  retries: 3,
  retryDelay: 1000, // ms
};

// Error interceptor - централизованная обработка ошибок
```

### React Query
Используется для:
- Серверного состояния
- Кеширования запросов
- Оптимистичных обновлений

---

## Локализация

### LanguageContext (Custom)
```tsx
const { t, language, setLanguage } = useLanguage();
```

### Поддерживаемые языки
- `en` - English
- `ru` - Русский
- `es` - Español
- `pt` - Português
- `fr` - Français

**Хранение**: LocalStorage (`language` key)

---

## Критические моменты (Gotchas)

### 1. Challenge не кешируется
```tsx
// ❌ НЕ делать:
const cachedChallenge = useSelector(selectChallenge);
// Данные могут быть устаревшими!

// ✅ Делать:
// Всегда загружать с сервера при входе на страницу
```

### 2. Координаты карты масштабируются
RouteRenderer масштабирует координаты шагов. При добавлении новых элементов учитывайте:
```tsx
const scaleX = containerWidth / baseMapWidth;
const scaleY = containerHeight / baseMapHeight;
```

### 3. SessionStorage для анимации
ProgressArrow сохраняет состояние в sessionStorage. При отладке очищайте:
```js
sessionStorage.clear();
```

### 4. memo() для оптимизации
Все тяжёлые компоненты карты обёрнуты в `memo()`:
```tsx
const FogOfWar = memo(({ steps, mapHeight, isCompleted }) => { ... });
```

---

## Типы данных (Ключевые)

### IStep
```tsx
interface IStep {
  id: string;
  index: number;
  x_coordinate: string;
  y_coordinate: string;
  active: boolean;
  completed: boolean;
  next: boolean;
  user_distance_percent?: number;
  stories?: IStory[];
}
```

### IRouteData
```tsx
interface IRouteData {
  points: IPoint[];
  baseWidth: number;
  baseHeight: number;
}
```

### IUser
```tsx
interface IUser {
  id: string;
  email: string;
  avatar?: string;
  language: Language;
  // ... metrics, preferences
}
```
