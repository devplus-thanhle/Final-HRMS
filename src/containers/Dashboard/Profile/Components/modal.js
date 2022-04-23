import { DatePicker, Input, TimePicker, Modal } from "antd";
import React from "react";

const Modals = (
  setDate,
  setTime,
  setReject,
  setIsModalVisible,
  isModalVisible
) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={setIsModalVisible}
      onCancel={handleCancel}
    >
      {setReject ? (
        <Input placeholder="Reject Reason" />
      ) : (
        <>
          <DatePicker onChange={(date, dateString) => setDate(dateString)} />
          <TimePicker
            format="HH:mm"
            onOk={(time) => {
              setTime(new Date(time).toLocaleTimeString());
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default Modals;
