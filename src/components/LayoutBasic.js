import React from "react";

export default function LayoutBasic(props) {
  const { children } = props;
  return (
    <div>
      <header>Menú TOP</header>
      <div>{children}</div>
      <footer>Pie</footer>
    </div>
  );
}
