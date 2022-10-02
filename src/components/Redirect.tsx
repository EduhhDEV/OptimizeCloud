import React, { useEffect } from "react";

export const Redirect: React.FC<{ url: string; blank?: boolean }> = ({ url, blank }) => {
  useEffect(() => {
    window.location.href = url;
  }, []);
  return <div />;
};
