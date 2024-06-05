import "./App.css";
import Main from "./components/main";
import Nav from "./components/nav";
import data from "./components/Data";
function App() {
  console.log(data);
  const dataMapper = data.map((mon) => {
    return (
      <Main
        mg={mon.imageURL}
        locion={mon.location}
        url={mon.googleMapsURL}
        tite={mon.title}
        strtdate={mon.start_date}
        enddte={mon.end_date}
        desc={mon.description}
      />
    );
  });
  return (
    <>
      <Nav />
      {dataMapper}
    </>
  );
}

export default App;
/*
 title
location
description
start_date
end_date
googleMapsURL
imageURL
*/
