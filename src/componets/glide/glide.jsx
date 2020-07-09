import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import anime from "animejs/lib/anime.es.js";
import people_in_couch from "../../resources/images/people-in-couch-1024248.jpg";
import working_man from "../../resources/videos/working-man.mp4";
import "./glide.css";

const GlideBox = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      autoplay: 5000,
    });
    const captions = document.querySelectorAll(".slide-caption");
    //glide监听轮播挂载后和轮播执行后
    glide.on(["mount.after", "run.after"], () => {
      const caption = captions[glide.index];
      // 动画
      anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        //开始为300毫秒 之后每个target增加400毫秒延迟
        delay: anime.stagger(400, { start: 300 }),
        //第一个target Y偏移40 最后一个偏移10，最终归于0（初始位置）
        translateY: [anime.stagger([40, 10]), 0],
      });
    });
    //glide监听 轮播前
    glide.on("run.before", () => {
      document.querySelectorAll(".slide-caption > *").forEach((element) => {
        element.style.opacity = 0;
      });
    });
    glide.mount();
  }, []);

  return (
    <div className="glide">
      {/* 轮播轨道 */}
      <div className="glide__track" data-glide-el="track">
        {/* 轮播容器 */}
        <div className="glide__slides">
          <div className="glide__slide">
            <div className="slide-caption">
              <h1>用创新点缀人生，让科技融入理想</h1>
              <h3>
                科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨越式大发展。用创新点缀人生，让科技融入理想
              </h3>
              <button className="explore-btn">探索更多</button>
            </div>
            {/* 黑色遮罩 */}
            <div className="blackdrop"></div>
            <img src={people_in_couch} alt="" />
          </div>
          <div className="glide__slide">
            <div className="slide-caption left">
              <h1>用创新点缀人生，让科技融入理想</h1>
              <h3>
                科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨越式大发展。用创新点缀人生，让科技融入理想
              </h3>
              <button className="explore-btn">探索更多</button>
            </div>
            {/* 黑色遮罩 */}
            <div className="blackdrop"></div>
            <video src={working_man} muted autoPlay loop></video>
          </div>
        </div>
        {/* 两边的箭头 */}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            {"<"}
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            {">"}
          </button>
        </div>
        {/* 轮播nav导航 第几张轮播图 */}
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
        </div>
      </div>
    </div>
  );
};

export default GlideBox;
