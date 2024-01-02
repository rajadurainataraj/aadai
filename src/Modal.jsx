import { useState } from "react";

let array = [1, 2, 3, 4, 5];

const Modal = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  function handle(item) {
    setActive(item);
    setShow(true);
  }

  function close() {
    setShow(false);
  }
  function next(id) {
    if (active === 5) return setActive(1);
    setActive((prevId) => prevId + 1);
    console.log(id);
  }

  return (
    <div className="cards">
      {array.map((item, i) => {
        return (
          <Card key={item} item={item} handle={handle} yes={active === i + 1} />
        );
      })}
      <Popup show={show} close={close} active={active} next={next}></Popup>
    </div>
  );
};

const Card = ({ item, handle, yes }) => {
  return (
    <>
      <div
        className={`card ${yes ? "active" : ""}`}
        onClick={() => handle(item)}
      >
        {item}
      </div>
    </>
  );
};

const Popup = ({ show, active, next, close }) => {
  return (
    show && (
      <div onClick={close} className="layout">
        <div className="modal">{active}</div>
        <div className="navigation">
          <div className="direction lt" onClick={() => next(active)}>
            &gt;
          </div>
          <div className="direction gt">&lt;</div>
        </div>
      </div>
    )
  );
};

let data = [
  { title: "Title 1", description: "Desc 1" },
  { title: "Title 2", description: "Desc 2" },
];

const Parent = () => {
  return (
    <>
      <div>
        {data.map((item, i) => {
          return (
            <Alert key={i} {...item}>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </Alert>
          );
        })}
      </div>
    </>
  );
};

const Alert = ({title,description,children}) => {
  
  return (
    <>
    {children}
    </>
  );
};
export default Parent;

//94923-85985
