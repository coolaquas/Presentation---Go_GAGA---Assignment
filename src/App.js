import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Card, Input, Modal, Button } from "antd";

const { Search } = Input;

function App(props) {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    sendGetRequest();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const sendGetRequest = async (option = "") => {
    try {
      let url = `${
        window.location.hostname === "localhost"
          ? "http://localhost:8000/api/"
          : "https://spangle-jasper-ocarina.glitch.me/api/"
      }${option}`;
      console.log(url);
      await axios.get(url).then((res) => {
        setCardsData(res.data.reverse());
      });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const sendPostRequest = async () => {
    try {
      let url =
        window.location.hostname === "localhost"
          ? "http://localhost:8000/api/addInfo"
          : "https://spangle-jasper-ocarina.glitch.me/api/addInfo";
      await axios
        .post(url, {
          Name: name,
          Location: location,
        })
        .then((res) => {
          alert(res.data);
          sendGetRequest();
          setVisible(false);
        });
    } catch (err) {
      setName("");
      setLocation("");
      alert(err.response.data.msg);
    }
  };

  const onSearch = (value) => {
    sendGetRequest(value);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    sendPostRequest();
  };

  const handleCancel = () => {
    setName("");
    setLocation("");
    setVisible(false);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>Samrat Mallick Web App</h1>
        <div className="app__search">
          <Search
            style={{ width: 900, margin: 10 }}
            placeholder="Enter Name or Location"
            onSearch={onSearch}
            enterButton
            allowClear
          />
        </div>
        <div className="app__upload">
          <Button onClick={showModal}>Upload Info</Button>
          <Modal
            title="Upload Data"
            visible={visible}
            onOk={handleOk}
            okText="Submit"
            onCancel={handleCancel}
          >
            <div className="upload__container">
              <div className="upload__name">
                <span>Please enter Name</span>
                <input
                  placeholder="Please enter Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="upload__Location">
                <span>Please enter Location</span>
                <input
                  placeholder="Please enter Location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className="app__cardContainer">
        {cardsData?.map((info, idx) => {
          return (
            <div className="app__card" key={idx}>
              <Card
                size="small"
                style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                loading={loading}
              >
                <p> Name : {info.Name}</p>
                <p>Location : {info.Location}</p>
              </Card>
            </div>
          );
        })}
        {/* <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <p> Name : {"Name"}</p>
          <p>Location : {"Location"}</p>
        </Card> */}
      </div>
    </div>
  );
}

export default App;
