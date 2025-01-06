import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {  // No need for 'export default' inside function
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? '🌑' : '☀️'}
    </button>
  );
};

export default ThemeToggle;  // Default export for the component
