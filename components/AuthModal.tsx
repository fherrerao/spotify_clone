'use client'

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";


const AuthModal = () => {
    return (
        <Modal
            title="Welcome back"
            description="Login to your account"
            isOpen
            onChange={() => {}}
        >
            Auth Modal Children
        </Modal>
    )
}