import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Swagger() {
  return <SwaggerUI url="/swagger.yaml" />;
}
