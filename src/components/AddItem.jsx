import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  orderId: "",
  productName: "",
  productDescription: "",
  category: "",
  type: "",
  price: "",
  quantity: "",
  discount: "",
  isStock: "",
};

const AddItem = () => {
  const [data, setData] = useState(initialState);
  const [progress, setProgess] = useState(null);
  const {
    orderId,
    productName,
    productDescription,
    category,
    type,
    price,
    quantity,
    discount,
    isStock,
  } = data;

  const [file, setFile] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [users, setUsers] = useState([]);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    // console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !orderId ||
      !productName ||
      !productDescription ||
      !category ||
      !type ||
      !price ||
      !quantity ||
      !discount ||
      !isStock
    )
      return;
    setIsSubmit(true);

    try {
      await addDoc(collection(db, "newUsers"), {
        uid: uuidv4(),
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    setData(initialState);
    setFile(null);
    console.log("data", data);
  }

  function uploadFile() {
    // const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgess(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");
            break;
          case "running":
            console.log("Running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setData((prev) => ({ ...prev, img: [downloadURL, downloadURL] }));
        });
      }
    );
  }

  useEffect(() => {
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "newUsers"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const title = users?.map((user) => Object.keys(user));

  const array = [
    "orderId",
    "productName",
    "productDescription",
    "category",
    "type",
    "price",
    "quantity",
    "discount",
    "isStock",
    "uid",
    "img",
    "timeStamp",
  ];
  // console.log(users && users);
  return (
    <>
      <div>AddItem</div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="orderId">Order Id:</label>
            <input
              type="number"
              name="orderId"
              value={orderId}
              onChange={handleChange}
              placeholder="Order Id"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={handleChange}
              placeholder="Product Name"
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              rows="3"
              cols="50"
              maxLength="50"
              type="text"
              name="productDescription"
              value={productDescription}
              onChange={handleChange}
              placeholder="Product description"
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select name="category" value={category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="type">Type:</label>
            <select name="type" value={type} onChange={handleChange}>
              <option value="">Select Type</option>
              <option value="sarees">Sarees</option>
              <option value="kurta">kurta</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          </div>
          <div>
            <label htmlFor="discount">Discount:</label>
            <input
              type="number"
              name="discount"
              value={discount}
              onChange={handleChange}
              placeholder="Discount"
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="isStock">isStock:</label>
            <input
              type="text"
              name="isStock"
              value={isStock}
              onChange={handleChange}
              placeholder="IsStock"
            />
          </div>
          <div>
            <label htmlFor="upload"> Image/Photocard</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <table className="users-table">
        <thead>
          <tr>
            {title[0]?.map((title, i) => {
              return (
                <th key={i} className="users-table-cell">
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users?.map((entry, i) => (
            <tr key={i}>
              {title[0]?.map((column) => (
                <td
                  key={column}
                  className="users-table-cell"
                  style={{ overflow: "hidden" }}
                >{`${entry[column]}`}</td>
              ))}
              {/* <td>
                <img src={entry["img"]} alt="test" width={"100px"} />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AddItem;
