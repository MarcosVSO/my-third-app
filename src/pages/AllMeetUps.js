import MeetUpList from "../components/meetups/MeetUpList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  async function loadMeetups(){
    const jsonData = 
    await fetch('https://react-getting-started-6e72f-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => response.json())
    console.log(jsonData);
  }


  useEffect(() => {
    setIsLoading(true);
    loadMeetups();
    fetch(
      "https://react-getting-started-6e72f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  


  if (isLoading) {
    return (
      <section>
        <p>Carregando Meetups...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meet Ups</h1>
      <MeetUpList itemsList={loadedMeetups} />
    </div>
  );
}

export default AllMeetUpsPage;
