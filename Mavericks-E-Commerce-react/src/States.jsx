import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import { toast } from "react-toastify";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, getUser, logout } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";
import { products } from "./ProjectDatabase";
import { supabase } from "./supabase";

const Context = createContext();
export const States = ({ children }) => {
  const [cartShow, setCartShow] = useState(false);
  const [totalQuatity, setTotalQuatity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [filterShow, setFilterShow] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [detail, setDetail] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [filterChoice, setFilterChoice] = useState("All");
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const [givenRating, setGivenRating] = useState(0);
  const [review, setreview] = useState();
  const [reviews, setreviews] = useState(detail.reviews || []);
  const [address, setAddress] = useState(null);
  const [Naddress, setNaddress] = useState(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [cod, setCod] = useState(false);
  const [signupData, setSignupData] = useState({});
  const [showAddress, setShowAddress] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [userName, setUserName] = useState("");
  const [uname, setUname] = useState("");
  const [arrayToFilter, setArrayToFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isGoogle, setIsGoogle] = useState(true);
  const ApplyCoupon = (cp) => {
    if (cp.toLocaleLowerCase() === "skct") {
      setTotalPrice(totalPrice + 100);
      setCoupon(coupon + " ");
    }
  };
  const changeName = (uname) => {
    setUserName(uname);
    setUname("");
  };
  const GotoStores = () => {
    setLoading(true);
    navigate("/storesDetails");
  };
  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    setSignupData(data);
    if (error) {
    } else {
      addData();
      // addData();
      setLoading(false);
      alert("Verification Mail Sent");
      navigate("/Login");
    }
  };
  async function addData() {
    try {
      await supabase
        .from("userdetails")
        .insert({
          id: signupData.user.id,
          displayName: name,
          email: email,
          // password: password,
          mobile_no: pnumber,
          photoURL: photoURL,
        })
        .single();
    } catch (error) {
      // alert(error.message);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  const addAddress = () => {
    setNaddress(address);
    setAddress(null);
  };
  const addreview = (e) => {
    e.preventDefault();
    let reviewData = {
      image: user?.photoURL,
      name: user?.displayName,
      rating: givenRating,
      review,
      uploaded: new Date().toISOString(),
    };
    setreviews((prevReview) => [...prevReview, reviewData]);
    setreview("");
    setGivenRating(0);
  };
  useEffect(() => {
    const filterSelectedCategoryOptions = (array) => {
      if (filterChoice.props?.value) {
        return array.filter((item) => filterChoice.props?.value <= item.rating);
      } else {
        return array.filter((item) =>
          filterChoice.toLowerCase() === "all"
            ? item
            : item.category.toLowerCase().includes(filterChoice.toLowerCase())
        );
      }
    };
    const filtersearchName = (array) => {
      return array.filter((item) =>
        searchValue.toLowerCase() === ""
          ? item
          : item.pname
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            // || +item.des2.toLowerCase().includes(searchValue)
            item.description.toLowerCase().includes(searchValue)
      );
    };
    let result = products;
    result = filterSelectedCategoryOptions(result);
    result = filtersearchName(result);
    setArrayToFilter(result);
  }, [searchValue, filterChoice]);
  useEffect(() => {
    detail.reviews = reviews;
    localStorage.setItem("detailReview", JSON.stringify(reviews));
    localStorage.setItem("products", JSON.stringify(products));
  }, [reviews]);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [detail.reviews]);

  const Paid = (delivery) => {
    navigate("/paymentSuccess");
    setCartItems([]);
  };
  const user = useSelector(getUser);
  const LoginSubmit = async () => {
    setLoading(true);
    setIsGoogle(false);
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      return;
    } else {
      // dispatch(setUser(data.user));
      localStorage.setItem("auth", data.user.id);
      navigate(`/home/${localStorage.getItem("auth")}`);
      let { data: userdetail, pError } = await supabase
        .from("userdetails")
        .select("*")
        .eq("id", localStorage.getItem("auth"));
      if (pError) {
      }
      const profileData = userdetail.find((user) => {
        return user.id === localStorage.getItem("auth");
      });
      dispatch(setUser(profileData));
      setLoading(false);
      setUserName(profileData?.displayName);
    }
  };
  const handleLogin = async () => {
    setIsGoogle(true);
    if (user != null) {
      navigate(`/home/${localStorage.getItem("auth")}`);
    } else {
      const response = await signInWithPopup(auth, provider);
      dispatch(setUser(response.user));
      setUserName(response.user.displayName);
      localStorage.setItem("auth", response.user.uid);
      navigate(`/home/${localStorage.getItem("auth")}`);
    }
    if (user != null) {
      localStorage.setItem("auth", user?.uid);
      navigate(`/home/${localStorage.getItem("auth")}`);
    }
  };

  const handleLogout = async () => {
    navigate("/Login");
    dispatch(logout());
    await signOut(auth);
    localStorage.removeItem("auth");
    setEmail("");
    setPassword("");
  };
  if (isGoogle) {
    // useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        localStorage.setItem("auth", user?.uid);
      } else {
        dispatch(setUser(null));
        localStorage.removeItem("auth");
      }
      if (user != null) {
        localStorage.setItem("auth", user?.uid);
        // navigate(`/home/${localStorage.getItem("auth")}`);
      }
    });
    // }, [user]);
  }
  const AddtoCart = (product) => {
    const find = cartItems.find((p) => p.pname === product.pname);
    if (!find) {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product }]);
      setTotalPrice(totalPrice + product.price * product.qty);
      toast(`${product.pname} added to cart`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    } else {
      alert(`${product.pname} already added in the cart`);
    }
  };
  const RemoveOnCart = (product) => {
    const delteProduct = cartItems.find((p) => p.pname === product.pname);
    const afterDeleteItem = cartItems.filter(
      (item) => delteProduct.pname !== item.pname
    );
    setTotalPrice(totalPrice - delteProduct.qty * delteProduct.price);
    setCartItems(afterDeleteItem);
    toast(`${product.pname} Removed Successfully`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  const OnInc = (item) => {
    item.qty = item.qty + 1;
    setTotalPrice(totalPrice + item.price);
  };
  const OnDec = (item) => {
    if (item.qty <= 1) {
      RemoveOnCart(item);
    } else {
      item.qty = item.qty - 1;
      setTotalPrice(totalPrice - item.price);
    }
  };
  return (
    <Context.Provider
      value={{
        cartShow,
        setCartShow,
        showProfile,
        setShowProfile,
        filterShow,
        totalQuatity,
        setFilterShow,
        setTotalQuatity,
        totalPrice,
        setTotalPrice,
        qty,
        setQty,
        cartItems,
        setCartItems,
        AddtoCart,
        OnInc,
        OnDec,
        RemoveOnCart,
        user,
        Paid,
        detail,
        setDetail,
        setSearchValue,
        searchValue,
        filterChoice,
        setFilterChoice,
        handleLogin,
        handleLogout,
        givenRating,
        setGivenRating,
        review,
        setreview,
        reviews,
        setreviews,
        addreview,
        address,
        setAddress,
        Naddress,
        setNaddress,
        addAddress,
        open,
        setOpen,
        GotoStores,
        handleSubmit,
        email,
        setEmail,
        cod,
        setCod,
        password,
        setPassword,
        LoginSubmit,
        name,
        setName,
        pnumber,
        setPnumber,
        photoURL,
        setPhotoURL,
        showAddress,
        setShowAddress,
        showStatus,
        setShowStatus,
        showWallet,
        setShowWallet,
        viewProfile,
        setViewProfile,
        userName,
        setUserName,
        changeName,
        uname,
        setUname,
        arrayToFilter,
        setArrayToFilter,
        loading,
        setLoading,
        coupon,
        setCoupon,
        ApplyCoupon,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStates = () => useContext(Context);
