import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Categories",
    path: "/Categories",
    icon: <AiIcons.AiFillAppstore />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      // {
      //   title: "All",
      //   path: "/Categories/All",
      //   icon: <AiIcons.AiOutlineBars />,
      // },
      {
        title: "men's fashion",
        path: "/Categories/men",
        icon: <AiIcons.AiOutlineSkin />,
      },
      {
        title: "Car's Accessories ",
        path: "/Categories/Car's",
        icon: <AiIcons.AiFillCar />,
      },
      {
        title: "bags & shoes",
        path: "/Categories/bags",
        icon: <AiIcons.AiOutlineShopping />,
      },
      {
        title: "Jewelry & Watches ",
        path: "/Categories/Jewelry",
        icon: <AiIcons.AiOutlineSketch />,
      },

    ],
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Cart",
    path: "/Cart",
    icon: <AiIcons.AiOutlineShoppingCart />,
  },
];