# SchooLama – School Management Dashboard

A modern, full-featured school management dashboard built with Next.js, React, and Tailwind CSS. Manage students, teachers, classes, parents, events, announcements, and more—all in one place.

## Features

- **Role-based Dashboards:** Separate views for Admin, Teacher, Student, and Parent.
- **Comprehensive Data Management:** CRUD operations for students, teachers, classes, subjects, lessons, exams, assignments, results, and parents.
- **Interactive Charts & Analytics:** Visualize attendance, finance, performance, and student demographics with Recharts.
- **Event & Announcement Calendars:** Stay updated with school events and important announcements.
- **Responsive UI:** Clean, mobile-friendly design using Tailwind CSS.
- **Authentication:** Sign-in page for secure access (customize as needed).
- **Reusable Components:** Forms, tables, modals, search, pagination, and more.
- **Form Validation:** Integrated with React Hook Form and Zod for robust validation.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) (data visualization)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (form validation)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
	app/                # Next.js app directory (routing, layouts, pages)
		(dashboard)/      # Main dashboard routes (admin, teacher, student, parent, lists)
		sign-in/          # Authentication page
	components/         # Reusable UI components (charts, tables, forms, etc.)
		forms/            # Form components for different entities
	lib/                # Data mocks and utilities
public/               # Static assets (images, icons, etc.)
```

## Customization

- Update mock data in `src/lib/data.ts` as needed.
- Add or modify components in `src/components/`.
- Adjust Tailwind config in `tailwind.config.ts`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
