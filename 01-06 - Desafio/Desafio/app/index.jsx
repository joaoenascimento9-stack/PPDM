import { MusicaProvider } from './context/MusicaContext';
import Rotas from './routes';

export default function Index() {
  return (
    <MusicaProvider>
      <Rotas />
    </MusicaProvider>
  );
}