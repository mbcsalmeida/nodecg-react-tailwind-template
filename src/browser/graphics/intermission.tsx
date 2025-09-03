import { render } from '../render';
import { ThemeProvider } from './components/theme-provider';


const Intermission = () => {
  return (
    <ThemeProvider>
      <p className="text-3xl font-bold underline text-black">Hello world!  </p>
    </ThemeProvider>
  );
};

render(<Intermission />);
