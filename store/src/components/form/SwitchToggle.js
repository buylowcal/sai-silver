import Switch from "react-switch";

const SwitchToggle = ({ id, title, handleProcess, processOption }) => {
  return (
    <>
      <div className={`${"mb-3"}`}>
        <div className="flex flex-wrap items-center">
          <label className="text-sm tracking-widest  font-medium text-gray-400 mr-1">
            {title}
          </label>

          <Switch
            id={id || title || ""}
            onChange={handleProcess}
            checked={processOption}
            className="react-switch md:ml-0 ml-3"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 14,
                  color: "white",
                  paddingRight: 4,
                  paddingTop: 1,
                }}
              >
                NO
              </div>
            }
            width={80}
            height={30}
            handleDiameter={28}
            offColor="#ff6b01"
            onColor="#000000"
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 14,
                  color: "white",
                  paddingLeft: 8,
                  paddingTop: 1,
                }}
              >
                YES
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default SwitchToggle;
