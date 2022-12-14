import ThemeContrast from './ThemeContrast';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeContrast>
      {children}
    </ThemeContrast>
  );
}
