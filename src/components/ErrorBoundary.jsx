import React, { useState, useEffect } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (props.children.props && props.children.props.showError) {
      setHasError(true);
      setError(props.children.props.error);
    }
  }, [props.children]);

  if (hasError) {
    return (
      <div>
        <h1>Ошибка приложения</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return props.children;
}

export default ErrorBoundary;