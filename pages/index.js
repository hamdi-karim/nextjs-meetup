import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://www.magiclinks.com/blog/wp-content/uploads/2017/12/youtuber-meetup.jpg",
    address: "VidCon street 5, city of love",
    description: "This is a first meeting",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://milanoexplorer.com/wp-content/uploads/2024/04/meetup-groups-in-milan-how-to-meet-new-people-in-milan.jpg?ezimgfmt=rs:750x432/rscb1/ngcb1/notWebP",
    address: "Milan street 2, city of pizza",
    description: "This is a second meeting",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
