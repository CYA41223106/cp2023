var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w1', 'text': '\n 介紹這門計算機課程會使用的網站；Github \n 開始進行個人帳號建 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '\n 進行網路設定 \n 建立個人網站，利用Replit啟動編輯網站，進行編輯 \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n  \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n  \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n  \n    return 0;\n} \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '  // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n  // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n  // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n  // https://www.rapidtables.com/web/color/RGB_Color.html\n  // 幾何形狀著色與繪圖練習\n  // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n  #include <stdio.h>\n  #include <gd.h>\n  #include <math.h>\n\n  void draw_roc_flag(gdImagePtr img);\n  void draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\n  int main() {\n      // width 3: height 2\n      int width = 1200;\n      // 國旗長寬比為 3:2\n      int height = (int)(width*2.0 / 3.0);\n\n      gdImagePtr img = gdImageCreateTrueColor(width, height);\n      gdImageAlphaBlending(img, 0);\n\n      draw_roc_flag(img);\n\n      FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n      if (outputFile == NULL) {\n          fprintf(stderr, "Error opening the output file.\\n");\n          return 1;\n      }\n      gdImagePngEx(img, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(img);\n      return 0;\n  }\n\n  void draw_roc_flag(gdImagePtr img) {\n      int width = gdImageSX(img);\n      int height = gdImageSY(img);\n      int red, white, blue;\n      // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n      int center_x = (int)(width/4);\n      int center_y = (int)(height/4);\n      // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n      // 由於中央白日圓形的半徑為青天寬度的 1/8\n      // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n      // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n      int sun_radius = (int)(width/8);\n      // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n      int white_circle_dia = sun_radius;\n      // 中央藍色圓形半徑為中央白日的 1又 2/15\n      int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n      // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n      red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n      white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n      blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n      // 根據畫布大小塗上紅色長方形區域\n      gdImageFilledRectangle(img, 0, 0, width, height, red);\n      // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n      gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n      // 先設法以填色畫出六個白色堆疊菱形\n      draw_white_sun(img, center_x, center_y, sun_radius, white);\n      // 利用一個藍色大圓與白色小圓畫出藍色環狀\n      gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n      gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n  }\n\n  void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n      // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n      // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n      float deg = M_PI/180;\n      // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n      // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n      float sr = sun_radius/tan(75*deg);\n      int ax, ay, bx, by, dx, dy, ex, ey;\n      gdPoint points[4];\n      /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // AB\n      gdImageLine(img, ax, ay, bx, by, color);\n      // BE\n      gdImageLine(img, bx, by, ex, ey, color);\n      // ED\n      gdImageLine(img, ex, ey, dx, dy, color);\n      // DA\n      gdImageLine(img, dx, dy, ax, ay, color);\n      */\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n      for (int i=1;i<=6;i++){\n      // A\n      points[0].x = ax+sun_radius*sin(30*deg*i);\n      points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n      // B\n      points[1].x = bx+sr-sr*cos(30*deg*i);\n      points[1].y = by-sr*sin(30*deg*i);\n      // E\n      points[2].x = ex-sun_radius*sin(30*deg*i);\n      points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n      // D\n      points[3].x = dx-(sr-sr*cos(30*deg*i));\n      points[3].y = dy+sr*sin(30*deg*i);\n      // 對菱形區域範圍塗色\n      gdImageFilledPolygon(img, points, 4, color);\n      // 在菱形區域外圍畫線, 明確界定菱形範圍\n      gdImagePolygon(img, points, 4, color);\n      }\n  } \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'W11', 'text': '使用隨身碟設定網路 \n \n 開啟檢視->副檔名與隱藏檔案設定，才可以看到隱藏檔案與附檔名名稱 \n 下載 w11_1a-> 解壓縮檔案到自己的隨身碟 \n 將紅圈內改成自己的序號\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 儲存檔案後第二個檔案按右鍵>以系統管理員身份執行 \n 查看網路設定是否成功，是否為自己的序號 \n 以上，當每次開啟電腦時只需從第四點開始執行，電腦就會自己設定好網路了 \n \n 心得: \n 學會了這個設定後真的很方便，不用像剛開始的時候需找到電腦設定裡的Proxy去做設定，然後打一堆得字，現在只需按幾個步驟就好。 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '今天的課程內容繼上次做了建立第13週的github鑰匙，跟著老師一步一步做，慢慢進步，從以前還要慢慢設定網路，到現在只要插上隨身碟就可以執行管理員使用網路了，還可以做編輯以及提交，希望下次能學得更多。 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束  \n \n  ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};