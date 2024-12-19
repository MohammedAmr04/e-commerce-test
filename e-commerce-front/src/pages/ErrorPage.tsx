import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let errorStatus: number; 
    let errorStatusText: string;
    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText=error.statusText
    } else {
        errorStatus = 404;
        errorStatusText="Page Not Found"
    }
    return (
        <Container className=" text-center mt-5">
            <h1>{errorStatus }</h1>
            <p>{errorStatusText }</p>
            <Link to='/' replace={true}>If you want to back safty</Link>
      </Container>
  )
}
