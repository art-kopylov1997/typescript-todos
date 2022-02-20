import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница информации</h1>
      <h4>Это учебный проект сделанный на TypeScript для портфолио</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        commodi debitis, dignissimos doloremque, excepturi fugiat id iusto
        laboriosam, laudantium magnam nemo quae repellat repudiandae sequi sint
        vero voluptas. Minus, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat
        illo laudantium minima odio placeat soluta. Aliquid dolores laborum
        necessitatibus non porro, quisquam repudiandae voluptatum.
      </p>
      <button className="btn" onClick={() => navigate("/")}>
        Вернуться к списку дел
      </button>
    </>
  );
};
