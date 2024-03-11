"use client";

import React, { useState, type JSX, type FormEvent, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "@/public/img/profile.svg";
import { BiSolidPencil } from "react-icons/bi";
import SignOutButton from "@/components/common/button/sign-out-button";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "reactfire";
import Password from "./edit-password";
import {
  updateProfileAccount,
  setProfileAccountImage,
} from "../../store/actions/profile-account-action";

function User(): JSX.Element {
  const imageUrl = useSelector((state: any)=> state.profileAccount.imageUrl);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(false);
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);
  const [photoURL, setPhotoURL] = useState("");
  const [profile, setProfile] = useState({});
  const auth = useAuth();

  useEffect(() => {
    const userProfile: any = {}
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        if(user.email !== null && user.email !== undefined){
        setEmail(user.email);
        userProfile.email = user.email;
        }
        if(user.displayName !== null && user.displayName !== undefined){
          const names = user.displayName.split(' ');
          if (names.length > 1) {
            const lastName = names.pop();
            if(lastName !== null && lastName !== undefined){
            setLastname(lastName);
            userProfile.lastname = lastName;
            const firstName = names.join(' ');
            setFirstname(firstName);
            userProfile.firstname = firstName;  
          }
        }else{
          setFirstname(user.displayName)
          setLastname("")
          userProfile.firstname = user.displayName;
        }
        if(user.photoURL !== null && user.photoURL !== undefined){
          setPhotoURL(user.photoURL);
          userProfile.photoURL= user.photoURL
        }
      }
      }});
      setProfile(userProfile)
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleProfile(e: FormEvent): void {
    e.preventDefault();
    if (firstname?.length === 0 || lastname?.length === 0) {
      toast.error("Please fill the details correctly");
    } else {
      dispatch(updateProfileAccount({profile, firstname, lastname, imageUrl, email}) as any);
      toast.success("Profile updated successfully");
    }
  }
  const handleProfileImageSelect = (): void => {
    if (fileInput !== null) fileInput.click();
  };

  const handleImageChange = (e: any): void => {
    try {
      const selectedImage = e.target.files[0];
      if (selectedImage !== null) dispatch(setProfileAccountImage(selectedImage) as any);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="w-full bg-userbg min-h-screen h-fit p-8">
      <h1 className="text-3xl mb-6 sm:mb-3">Profile</h1>

      <div className="w-full flex flex-col sm:flex-row items-center justify-around gap-8">
        <div className="flex">
          <div className="w-28 sm:w-40 lg:w-60 relative">
            <Stack>
              {photoURL === "" && imageUrl === "" && <Image src={Profile} alt="Profile" width={150} height={150} />}
              {((typeof photoURL === 'string' && photoURL !== '') || (typeof imageUrl === 'string' && imageUrl !== '')) && (
                <Avatar
                  alt="profile"
                  src={imageUrl !== '' ? imageUrl : photoURL}
                  sx={{
                    width: [100, 150],
                    height: [100, 150],
                  }}
                />
              )}
            </Stack>
            <BiSolidPencil
              onClick={handleProfileImageSelect}
              className="text-3xl self-end hover:cursor-pointer"
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={(fileInputRef) => {
                setFileInput(fileInputRef);
              }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl h-5/6 w-11/12 sm:w-2/3 lg:w-1/2 py-10 sm:py-8 px-10 shadow-element">
          <h1 className="font-medium mb-3 sm:mb-4 xl:mb-5 text-2xl">Account Info</h1>

          <form className="flex flex-col" onSubmit={handleProfile}>
            <label htmlFor="first-name">
              <span>First Name</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="first-name"
                  className="auth-input h-8 lg:h-10 mb-3 mt-1"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <BiSolidPencil className="relative bottom-10 right-3 self-end" />
              </div>
            </label>

            <label htmlFor="last-name">
              <span>Last Name</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="last-name"
                  className="auth-input h-8 lg:h-10 mb-3 mt-1"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
                <BiSolidPencil className="relative bottom-10 right-3 self-end" />
              </div>
            </label>

            <label htmlFor="email">
              <span>Email</span>
              <input
                type="email"
                id="email"
                className="auth-input h-8 lg:h-10 mb-5 mt-1"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>

            <span>Password</span>
            <div
              role="button"
              tabIndex={0}
              className="flex gap-5 auth-input w-3/5 text-sm xl:w-2/5 py-2 hover:cursor-pointer"
              onClick={() => {
                setEdit(true);
              }}
              onKeyDown={() => {
                setEdit(true);
              }}
            >
              Change Password
              <BiSolidPencil className="mt-1" />
            </div>

            <div className="flex justify-between w-full mt-3">
              <SignOutButton />
              <button className="primarybtn w-1/4 lg:w-1/6 h-8 lg:h-10 mx-1 lg:mx-4" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* @ts-expect-error */}
      <Password
        edit={edit}
        onClose={() => {
          setEdit(false);
        }}
      />
    </div>
  );
}

export default User;
