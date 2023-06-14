import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { useGetAllCategories } from "../../services/categoryServices";

export default function MobileSidebar() {
  const { push } = useRouter();

  const [state, setState] = useState({
    left: false,
  });
  //categories
  const { data: categoriesData, isLoading, isError } = useGetAllCategories();

  if (isLoading) return <></>;

  if (isError) return <></>;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 270,
        height: "",
      }}
      role="presentation"
      className=""
    >
      <div className="py-1 m-0" onClick={toggleDrawer(anchor, false)}>
        <Link href="/">
          <p className="m-0  flex items-center px-5 h-10 text-sm uppercase text-[#3e4152]">
            Home
          </p>
        </Link>
        <Divider />
      </div>
      <Box className="pr-2  ">
        {categoriesData?.map((item, index) => {
          return (
            <>
              <div
                className="py-1  m-0"
                key={index}
                onClick={toggleDrawer(anchor, false)}
              >
                <p
                  className="m-0 w-36 flex items-center px-5 h-10 text-sm uppercase text-[#3e4152]"
                  onClick={() => push(`/news/${item?.slug}`)}
                >
                  {item?.name}
                </p>
                <Divider />
              </div>
            </>
          );
        })}
      </Box>
      <div className="py-1 m-0" onClick={toggleDrawer(anchor, false)}>
        <Link href="/contact-us">
          <p className="m-0  flex items-center px-5 h-10 text-sm uppercase text-[#3e4152]">
            contact
          </p>
        </Link>
        <Divider />
      </div>
      <div className="py-1 m-0" onClick={toggleDrawer(anchor, false)}>
        <Link href="/contact-us">
          <p className="m-0  flex items-center px-5 h-10 text-sm uppercase text-[#3e4152]">
            become a reporter
          </p>
        </Link>
        <Divider />
      </div>
      <div className="py-1 m-0" onClick={toggleDrawer(anchor, false)}>
        <Link href="/privacy-policy">
          <p className="m-0  flex items-center px-5 h-10 text-sm uppercase text-[#3e4152]">
            Privacy Policy
          </p>
        </Link>
        <Divider />
      </div>
    </Box>
  );

  return (
    <div className="">
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <div className="h-fit w-fit p-2" onClick={toggleDrawer(anchor, true)}>
            <CgMenu className="text-2xl text-theme-primary-main " />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="relative h-full">{list(anchor)}</div>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
