import { ThemeSwitcher } from "../theme-switcher";

export function Header() {
  return (
    <header className="w-full h-16 max-w-7xl flex items-center justify-between mx-auto">
      <div>
        <h1>Logo</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
