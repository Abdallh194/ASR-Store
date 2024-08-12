import ReactDOM from "react-dom/client";

import AppRouter from "@routes/AppRouter";
import "@styles/globals.css";
import { Provider } from "react-redux";
import { store, Persistor } from "@Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@components/feedback/Loading";
import "@services/Axios-global";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={Persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
