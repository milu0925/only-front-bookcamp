export default function Home() {
  const [slidesToShow, setSlidesToShow] = useState(1.2); // 初始值為 1
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // 根據螢幕寬度設置展示的張數
  const handleResize = () => {
    if (window.innerWidth >= 1400) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(2.5);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(1.7);
    } else {
      setSlidesToShow(1.2);
    }
  };

  //Slider 設定
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  // top10
  const [books, setBooks] = useState([]);
  useEffect(() => {
    readbooks("", "top10")
      .then((v) => {
        setBooks(v.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>home</div>;
}
