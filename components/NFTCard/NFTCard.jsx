import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground1,
      name: "Dance Monkey",
    },
    {
      images: images.creatorbackground2,
      name: "Sports",
    },
    {
      images: images.creatorbackground3,
      name: "Entertainment Art",
    },
    {
      images: images.creatorbackground4,
      name: "Time Life",
    },
    {
      images: images.creatorbackground5,
      name: "Animals Art",
    },
    {
      images: images.creatorbackground6,
      name: "Music",
    },
    {
      images: images.creatorbackground7,
      name: "Digital Arts",
    },
    {
      images: images.creatorbackground8,
      name: "Hubby",
    },
    {
      images: images.creatorbackground8,
      name: "Bad Arts",
    },
    {
      images: images.creatorbackground9,
      name: " Arts",
    },
    {
      images: images.creatorbackground10,
      name: "My Fav",
    },
  ];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTCard}>
      {CategoryArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el.images}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>
                  {el.name} #{el.tokenId}
                </h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>{el.price}ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
