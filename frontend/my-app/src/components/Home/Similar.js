import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Message from "./Message";
import "./Similar.css";

function Similar() {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const uname = location.state.uname;
  const pass = location.state.pass;
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [guys, setGuys] = useState([]);
  const containerRef = useRef(null);
  const [channel, setChannel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/getmess`);
        const data = response.data;

        setList(data.mess);
        setGuys(data.name);

        // Scroll to the bottom of the container
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: uname,
      password: pass,
      message: message,
      channel:channel,
     
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/sendmess`,
        userData
      );

      if (response.status === 200) {
        window.location.reload();
      } // You can handle the response as needed
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="Similar" ref={containerRef}>
      
      {list.map((item, index) => (
        <Message key={index} mess={item} />
      ))}
      <h2 className="username">User :  {uname}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          
          <input type="text" className="messfield" value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <div>
      {/* <button onClick={() => setChannel("tele")}>tele-channel</button>
        <button onClick={() => setChannel("comm")}>community channel</button>
        <button onClick={() => setChannel("doubt")}>doubt channel</button> */}
        
      </div>
    </div>
  );
}

export default Similar;
