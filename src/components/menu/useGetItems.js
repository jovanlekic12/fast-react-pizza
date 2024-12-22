import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenuItems } from "../../feature/globalStateSlice";
const url = "https://react-fast-pizza-api.onrender.com/api/menu";
export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchItemsFromServer();
        dispatch(setMenuItems(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);
}

//const data = avait fetchItems()
//dispatch(setMenuItems(data))

async function fetchItemsFromServer() {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}
