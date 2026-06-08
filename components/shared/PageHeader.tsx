import React from "react";

type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <p className="page-header__description">{description}</p>
    </header>
  );
}
