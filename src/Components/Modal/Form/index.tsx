/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { CtaPrimary, Input } from "Style/shared-styles";
import { ModalButtonTypes } from "types";

export const Form: React.FC<{ treatment: ModalButtonTypes }> = ({
  treatment,
}) => {
  const [area, setArea] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ area, date, treatment });
  };

  return (
    <div css={{ flex: 1 }}>
      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Input
            icon="arrow"
            css={{ width: "100%", marginBottom: 16 }}
            hasBorder
            placeholder="Which area or city?"
            type="text"
            value={area}
            onChange={(e) => setArea(e.currentTarget.value)}
            name="area"
          />
          <Input
            icon="calendar"
            css={{ width: "100%", marginBottom: 16 }}
            hasBorder
            placeholder="When you want to go?"
            type="text"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            name="date"
          />
        </div>
        <CtaPrimary type="submit" className="submit" fullColor>
          Submit
        </CtaPrimary>
      </form>
    </div>
  );
};
