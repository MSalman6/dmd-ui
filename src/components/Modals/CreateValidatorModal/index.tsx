import BigNumber from "bignumber.js";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../../../contexts/Web3Context";
import { useStakingContext } from "../../../contexts/StakingContext";
import React, { useState, useEffect, useRef, FormEvent, startTransition } from "react";
import { isValidAddress } from "../../../utils/common";

interface ModalProps {
  buttonText: string;
}

const CreateValidatorModal: React.FC<ModalProps> = ({ buttonText }) => {
  const navigate = useNavigate();
  const { createPool } = useStakingContext();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [publicKey, setPublicKey] = useState("");
  const [stakeAmount, setStakeAmount] = useState(10000);
  const { userWallet, ensureWalletConnection } = useWeb3Context();

  const [nodeOperatorAddress, setNodeOperatorAddress] = useState("");
  const [nodeOperatorShare, setNodeOperatorShare] = useState<BigNumber | null>(null);
  const [isDifferentNodeOperator, setIsDifferentNodeOperator] = useState(false); // Track checkbox status

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleCreatePool = async (e: FormEvent) => {
    e.preventDefault();
    if (!ensureWalletConnection()) return;

    let nOperatorShare = nodeOperatorShare;
    let nOperatorAddress = nodeOperatorAddress;    

    if (!isDifferentNodeOperator) {
      nOperatorShare = new BigNumber(0);
      nOperatorAddress = "0x0000000000000000000000000000000000000000";
    } else {
      if (nOperatorAddress.length && !isValidAddress(nOperatorAddress)) {
        toast.error("Invalid node operator address");
        return;
      }
      if (nOperatorShare && (nOperatorShare.isLessThan(0) || nOperatorShare.dividedBy(100).isGreaterThan(20))) {
        toast.error("Node operator share must be between 0 and 20%");
        return;
      }
    }

    try {
      await createPool(publicKey, new BigNumber(stakeAmount), nOperatorAddress, nOperatorShare || new BigNumber(0));
    } catch (err) {
      console.log(err);
      toast.error("Error in creating pool");
    }
  };

  return (
    <>
      <button className="primaryBtn" onClick={openModal}>
        {buttonText}
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef}>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
            <h2>Create a pool</h2>

            <form className={styles.form} onSubmit={handleCreatePool}>
              <span>
                Please stake at least 10,000 DMD coins (50,000 max) to become a validator candidate.
              </span>

              <input
                type="text"
                minLength={130}
                maxLength={130}
                name="publicKey"
                className="publicKey"
                onChange={(e) => setPublicKey(e.currentTarget.value)}
                placeholder="Public key"
                required
              />

              <input
                min={10000}
                max={50000}
                type="number"
                value={stakeAmount}
                className={styles.formInput}
                placeholder="Enter the amount of DMD to stake"
                onChange={(e) => setStakeAmount(Number(e.target.value))}
              />

              <div className={styles.checkboxWrapper}>
                <span>Do you want to share the pool rewards with a node operator?</span>
                <input
                  type="checkbox"
                  checked={isDifferentNodeOperator}
                  onChange={() => setIsDifferentNodeOperator((prev) => !prev)}
                />
              </div>

              {isDifferentNodeOperator && (
                <>
                  <span>Please provide a node operator address to share the rewards and the %, which is forwarded to the address. Check out the <a onClick={() => { startTransition(() => { navigate('faqs') }) }}>FAQ section</a> to learn more.</span>

                  <input
                    type="text"
                    minLength={42}
                    maxLength={42}
                    name="nodeOperatorAddress"
                    className="nodeOperatorAddress"
                    value={nodeOperatorAddress}
                    onChange={(e) => setNodeOperatorAddress(e.target.value)}
                    placeholder="Node operator address"
                    required={isDifferentNodeOperator}
                  />

                  <div className={styles.inputWrapper}>
                    <input
                      type="number"
                      min={0}      // Minimum is 0%
                      max={20}     // Maximum is 20%
                      step={0.01} // Allows increments of 0.01%
                      name="nodeOperatorShare"
                      className={styles.nodeOperatorShare}
                      value={nodeOperatorShare ? (nodeOperatorShare.div(100).toNumber().toString() || "") : ""}
                      onChange={(e) => {
                        const percentage = parseFloat(e.target.value);
                        const scaledValue = isNaN(percentage) ? null : new BigNumber(percentage * 100);
                        setNodeOperatorShare(scaledValue);
                      }}
                      placeholder="Node operator share percentage"
                      required={isDifferentNodeOperator}
                    />
                    <span className={styles.percentageSign}>%</span>
                  </div>
                </>
              )}

              <button className={styles.formSubmit} type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateValidatorModal;

