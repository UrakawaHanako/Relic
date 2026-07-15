// Daftar gambar (pastikan file ada di folder "images")
const images = [
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (1).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (2).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (3).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (4).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (5).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (6).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (7).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (8).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (9).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (10).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (11).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (12).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (13).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (14).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (15).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (16).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (17).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (18).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (19).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (20).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (21).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (22).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (23).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (24).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (25).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (26).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (27).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (28).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (29).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (30).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (31).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (32).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (33).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (34).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (35).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (36).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (37).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (38).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (39).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (40).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (41).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (42).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (43).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (44).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (45).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (46).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (47).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (48).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (49).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (50).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (51).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (52).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (53).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (54).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (55).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (56).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (57).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (58).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (59).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (60).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (61).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (62).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (63).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (64).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (65).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact/Joyce (Joyce Lin2x) cosplay Lumine - Genshin Impact (66).jpg",

  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (1).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (2).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (3).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (4).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (5).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (6).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (7).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (8).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (9).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (10).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (11).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (12).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (13).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (14).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (15).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (16).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (17).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (18).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (19).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (20).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (21).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (22).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (23).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (24).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (25).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (26).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (27).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (28).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (29).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (30).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (31).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (32).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (33).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (34).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (35).PNG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (36).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (37).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (38).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (39).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (40).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (41).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (42).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (43).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (44).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (45).JPG",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Neppu (ネップ) cosplay Celestine Lucross - Mudae/Pic/Neppu (ネップ) cosplay Celestine Lucross - Mudae (46).JPG",

  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Unknown Cosplayer cosplay Lumine - Genshin Impact/Pic/Unknown Cosplayer cosplay Lumine - Genshin Impact (1).png",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/Unknown Cosplayer cosplay Lumine - Genshin Impact/Pic/Unknown Cosplayer cosplay Lumine - Genshin Impact (2).png",

  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/白日梦 (Cncmeng8) - Naked/白日梦 (Cncmeng8) - Naked (1).jpg",
  "/PARA/3_Resource/0.Arsip/Hiburan/D18/Package/Batch 1/白日梦 (Cncmeng8) - Naked/白日梦 (Cncmeng8) - Naked (2).jpg"
];

// ================================
// Cache Handling (Auto Cleanup)
// ================================

const CACHE_KEY = "viewerState";
const MAX_AGE = 10 * 60 * 1000; // 10 menit

function loadIndex() {
  const data = JSON.parse(sessionStorage.getItem(CACHE_KEY));
  if (!data) return 0;

  if (Date.now() - data.time > MAX_AGE) {
    sessionStorage.removeItem(CACHE_KEY);
    return 0;
  }

  return data.index ?? 0;
}

function saveIndex(index) {
  sessionStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      index,
      time: Date.now()
    })
  );
}

// ================================
// Viewer Logic
// ================================

let currentIndex = loadIndex();

function showImage(index) {
  if (!images.length) return;

  const img = document.getElementById("viewer");

  img.onerror = () => {
    img.src = "";
    console.warn("Gambar gagal dimuat:", images[index]);
  };

  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function randomImage() {
  currentIndex = Math.floor(Math.random() * images.length);
  showImage(currentIndex);
}

// ================================
// Event Binding
// ================================

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);

  const viewer = document.getElementById("viewer");

  viewer.addEventListener("click", () => {
    saveIndex(currentIndex);
    window.location.href = "Rosmons.html";
  });
});

// Auto bersih saat tab ditutup
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem(CACHE_KEY);
});