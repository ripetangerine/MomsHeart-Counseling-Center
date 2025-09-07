"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import styles from "./css/LoadMap.module.css";

export default function LoadMap() {

  return (
    <div className={styles.section}>
      <Maps lat={37.3250} lng={126.5012} />
    </div>
  );
}

function Maps({ lat, lng, level = 3 }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);   // 중복 생성 방지
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    if (!sdkReady || !mapRef.current) return;
    if (typeof window === "undefined" || !window.kakao?.maps?.load) return;

    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(lat, lng);

      // 이미 생성된 경우 위치/레벨만 갱신
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setCenter(center);
        mapInstanceRef.current.setLevel(level);
      } else {
        const map = new window.kakao.maps.Map(mapRef.current, { center, level });
        mapInstanceRef.current = map;

        new window.kakao.maps.Marker({ position: center, map });
      }
    });
  }, [sdkReady, lat, lng, level]);

  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
        await onError={(e) =>{
          return(
            <div style={{background:"green"}}>지도가안됍니다왜지감자</div>
          )}
        }
      />
      <div ref={mapRef} style={{ width: "100%", height: 400 }} />
    </>
  );
}
