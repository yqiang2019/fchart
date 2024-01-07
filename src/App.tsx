import React, { useEffect, useRef } from "react";
import { GraphicEditorCore } from "./lib/GraphicEditorCore";
import { ISprite } from "./lib/interface";
import RectSpriteMeta from "./lib/sprites/RectSprite";

// 默认精灵列表
const defaultSpriteList: ISprite[] = [
  {
    id: "RectSprite1",
    type: "RectSprite",
    props: {
      fill: "#fdc5bf"
    },
    attrs: {
      coordinate: { x: 100, y: 100 },
      size: { width: 160, height: 100 },
      angle: 0
    }
  },
];

const App = () => {
  const editorRef = useRef<GraphicEditorCore>();
  useEffect(() => {
    const api = editorRef.current;
    // 注册精灵
    api?.registerSprite(RectSpriteMeta);
    // 向画布中添加精灵
    api?.addSpriteToStage(defaultSpriteList);
  }, []);
  return <GraphicEditorCore ref={editorRef as any} width={800} height={560} />;
};

export default App;
