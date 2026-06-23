import { BrowserRouter } from "react-router-dom";

import { PlayerProvider } from "./contexts/PlayerContext";
import { LikedSongsProvider } from "./contexts/LikedSongsContext";

import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <LikedSongsProvider>
      <PlayerProvider>
        <BrowserRouter>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </BrowserRouter>
      </PlayerProvider>
    </LikedSongsProvider>
  );
}

export default App;