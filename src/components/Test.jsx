// import { useState } from "react";
import { increment, decrement } from "../counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const SidebarData = [
  {
    id: 0,
    title: "Dashboard",
    path: "/dashboard",
    icon: "ops-icon ic-dashboard",
  },
  {
    id: 1,
    title: "Services",
    path: "/services",
    icon: "ops-icon ic-items",
  },
  {
    id: 2,
    title: "Sales",
    path: "/",
    icon: "ops-icon ic-sales",

    iconClosed: "ops-icon ic-chevron_right",
    iconOpened: "ops-icon ic-dropup-outline",

    subNav: [
      {
        title: "Overview",
        path: "/sales/overview",
      },
      {
        title: "Quotation",
        path: "/sales/quotation",
      },
      {
        title: "Invoice",
        path: "/sales/invoice",
      },
      {
        title: "Payment Received",
        path: "/sales/payment_received",
      },
      {
        title: "Credit Notes",
        path: "/sales/credit_notes",
      },
    ],
  },
  {
    id: 3,
    title: "Purchase",
    path: "/",
    icon: "ops-icon ic-purchase",

    iconClosed: "ops-icon ic-chevron_right",
    iconOpened: "ops-icon ic-dropup-outline",

    subNav: [
      {
        title: "Overview",
        path: "/purchase/overview",
      },
      {
        title: "Vendors",
        path: "/purchase/vendors",
      },
      {
        title: "Expenses",
        path: "/purchase/expenses",
      },
      {
        title: "Purchase Order",
        path: "/purchase/purchase_order",
      },
      {
        title: "Bills",
        path: "/purchase/bills",
      },
      {
        title: "Payments Paid",
        path: "/purchase/payments_paid",
      },
      {
        title: "Vendor Credits",
        path: "/purchase/vendor_credits",
      },
    ],
  },
  {
    id: 4,
    title: "Organisation",
    path: "/",
    icon: "ops-icon ic-organisation",

    iconClosed: "ops-icon ic-chevron_right",
    iconOpened: "ops-icon ic-dropup-outline",

    subNav: [
      {
        title: "Bank Accounts",
        path: "/organisation/bank_accounts",
      },
      {
        title: "Employee",
        path: "/organisation/Employee",
      },
    ],
  },
  {
    id: 5,
    title: "Customer",
    path: "/customer",
    icon: "ops-icon ic-customer",
  },
  {
    id: 6,
    title: "Reports",
    path: "/reports",
    icon: "ops-icon ic-reports",
  },
  {
    id: 7,
    title: "Ticket",
    path: "/ticket",
    icon: "ops-icon ic-ticket",
  },
];

const Test = () => {
  const count = useSelector((store) => store.counter.value);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const dispatch = useDispatch();

  function add() {
    dispatch(increment(5));
  }

  function remove() {
    dispatch(decrement());
  }

  const images = [
    {
      image_url:
        "https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554",
      caption: "Image 1",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020",
      caption: "Image 2",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6",
      caption: "Image 3",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d",
      caption: "Image 4",
    },
  ];

  const games = ["Play Cricket", "Play video game", "Read book"];

  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pak",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];
  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <SlideContainer images={images} />
      {/* <ListContainer games={games} /> */}
      {/* <CountriesList countries={countries} /> */}

      {SidebarData.map((item, i) => {
        return (
          <>
            <SubMenu key={i} {...item} />
          </>
        );
      })}
    </>
  );
};

const SubMenu = (props) => {

  console.log(props);
  return (
    <>
     
    </>
  );
};

const SlideContainer = ({ images }) => {
  const [count, setCount] = useState(0);

  function next() {
    if (count === images.length - 1) return;
    setCount((prev) => prev + 1);
  }

  function prev() {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  }

  //0 === 1 1 ==== 1 2 ===0 3===0
  return (
    <div className="top-container">
      <div className="image-container">
        {images.map((item, i) => {
          return <Slide key={i} {...item} count={i === count} />;
        })}
      </div>
      <div className="navigate">
        {images.map((item, i) => (
          <div
            key={item.caption}
            className={`dot ${i === count ? "active" : ""}`}
            onClick={() => setCount(i)}
          ></div>
        ))}
      </div>

      <div className="navigation">
        <div className="next" onClick={next}>
          &gt;
        </div>
        <div className="prev" onClick={prev}>
          &lt;
        </div>
      </div>
    </div>
  );
};

const Slide = ({ image_url, caption, count }) => {
  return (
    <>
      <div className={`slide ${count ? "active" : ""}`}>
        <img src={image_url} alt={caption} />
        <div className="caption">{caption}</div>
      </div>
    </>
  );
};

const ListContainer = ({ games }) => {
  const [game, setGame] = useState(games);

  function remove(item) {
    const data = game.filter((data) => data !== item);
    setGame(data);
  }
  return (
    <div>
      {game.map((item, i) => {
        return <List key={i} item={item} remove={remove} />;
      })}
    </div>
  );
};

const List = ({ item, remove }) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="list">
      <input
        type="checkbox"
        checked={isTrue}
        onChange={(e) => setIsTrue(e.target.checked)}
      />

      <div>{item}</div>
      {isTrue && <button onClick={() => remove(item)}>Delete</button>}
    </div>
  );
};

function CountriesList({ countries }) {
  const [currentCountry, setCurrentCountry] = useState("IN");

  console.log(currentCountry);

  const result = countries
    .filter((country) => (country.value === currentCountry ? country : ""))
    .map((city) => city.cities)[0];

  return (
    <>
      {
        <select onChange={(e) => setCurrentCountry(e.target.value)}>
          {countries.map((country) => {
            return (
              <option key={country.name} value={country.value}>
                {country.name}
              </option>
            );
          })}
        </select>
      }

      {
        <select>
          {result.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      }
    </>
  );
}

export default Test;
