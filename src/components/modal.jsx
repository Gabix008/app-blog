
import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

 function ModalProvider  ({ children })  {
    const [showPostModal, setShowPostModal] = useState(false);
    const [showUpdatePostModal, setShowUpdatePostModal] = useState(false);

    const openPostModal = () => setShowPostModal(true);
    const closePostModal = () => setShowPostModal(false);

    const openUpdatePostModal = () => setShowPostModal(true);
    const closeUpdatePostModal = () => setShowPostModal(false);

    return (
        <ModalContext.Provider value={{ showPostModal, openPostModal, closePostModal, openUpdatePostModal,closeUpdatePostModal, showUpdatePostModal, setShowUpdatePostModal  }}>
            {children}
        </ModalContext.Provider>
    );
};
export default ModalProvider;