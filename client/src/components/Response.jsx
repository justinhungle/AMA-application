import React, { useState } from "react";
import styled from "styled-components";

export const Response = ({ response }) => {
  return (
    <div>
      <div>Prompt:{" "}{response.prompt}</div>
      <div>Response:{" "}{response.response}</div>
    </div>
  )
}