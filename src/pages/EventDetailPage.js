/* import { useParams } from "react-router-dom"; */
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  /*   const params = useParams();
   */

  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  //console.log(response);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  console.log(params);
  const id = params.eventId;
  console.log(id);

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  console.log(response);

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
