'use client'

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { CiCamera } from "react-icons/ci";

import { NextImage } from '../NextImage'

const EditModal = ({
  // editUserData,
  name,
  photoURL,
  children,
  title,
  action,
  editImage,
  closeModal,
  updateData,
  removeCoverImage,
}) => {

  const router = useRouter();

  const imageUrl = photoURL && photoURL.startsWith('blob')
    ? photoURL
    : photoURL
        ? `${process.env.EXTERNAL_API_URL}/storage/${photoURL}`
        : null; // Handle the case when photoURL is null

  const coverInputFileRef = useRef(null);
  const profileInputFileRef = useRef(null);

  const handleClose = () => router.back();

  const handleClick = (type) => () => {
    if (type === 'cover') {
      coverInputFileRef.current?.click();
    } else {
      profileInputFileRef.current?.click();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-4">
          <button className="btn btn-dark" onClick={handleClose}>Close</button>
          <h4>{title}</h4>
        </div>
        <button className="btn btn-primary" onClick={updateData}>{action}</button>
      </div>
      <div className="py-3">
        <div className='group position-relative mb-2' style={{height: '96px', width: '96px'}}>
          {photoURL ? (
            <NextImage
              useSkeleton
              className='position-absolute top-0 start-0 bottom-0 end-0 w-100 h-100'
              imgClassName='object-cover rounded-circle transition brightness-75'
              src={imageUrl}
              alt={name}
              layout='fill'
            />
          ) : null}
          <button
              className="btn position-absolute top-50 start-50 translate-middle p-2 rounded-circle"
              onClick={handleClick('profile')}
              style={{ zIndex: 1, background: 'rgba(0, 0, 0, .4)'}}
              alt="Change Profile Photo"
            >
              <CiCamera style={{height: '24px', width: '24px'}} className='d-block'/>
          </button>
        </div>
        <input type="file" ref={profileInputFileRef} onChange={editImage('profile')} style={{ display: 'none' }} />
        {children}
      </div>
    </>
  )
}

export default EditModal;
