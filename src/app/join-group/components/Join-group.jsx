"use client";
import React, { useState } from "react";
import Image from "next/image";

import "@/app/join-group/components/Join-group.css";

export default function JoinGroup({ groupName }) {
  return (
    <div className="join-group">
      <span className="join-group-top-line">You are invited to</span>

      <span className="join-group-dynamic-text">{groupName}</span>

      <span className="join-group-tag-line">
        Add, track, and split expenses with your friends
      </span>

      <div className="join-group-line"></div>

      <span className="join-group-bottom-line">Simplify your debts</span>

      <div className="join-group-button-container">
        <button className="join-group-button">
          <div className="join-image-conatiner">
            <Image
              src="/icons/apple-svg.svg"
              alt="apple store"
              height={18}
              width={18}
            />

            <div className="join-group-image-line"></div>

            <Image
              src="/icons/playstore-svg.svg"
              alt="play store"
              height={18}
              width={18}
            />
          </div>

          <span className="join-group-text">Download Numora</span>
        </button>
      </div>
    </div>
  );
}
