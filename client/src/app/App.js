import AppRoute from "../routing/appRoute";
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  function errorFallback({ error }) {
    return (
      <div role="alert">
        <h2>Something went wrong:</h2>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={errorFallback}>
        <AppRoute />
      </ErrorBoundary>
    </>
  );
}

export default App;
