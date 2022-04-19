export function copy(txt) {
    const base = new Base();
    var inputTest = document.createElement("input");
    inputTest.value = txt;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand("Copy");
    inputTest.className = "oInput";
    inputTest.style.display = "none";
    base.Toast("success", "复制成功");
    inputTest.parentNode.removeChild(inputTest);
}
export function commonDownload(file, fileName) {
    if ("download" in document.createElement("a")) {
        const elink = document.createElement("a");
        elink.style.display = "none";
        if (fileName) {
            elink.download = fileName;
        }
        if (typeof file == "string") {
            elink.href = file;
        } else {
            elink.href = URL.createObjectURL(file);
        }
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
    } else {
        navigator.msSaveBlob(file, fileName);
    }
}
export function isRepeat(arr, key = null, value = null, filter = "") {
    if (key === null) {
        //数组每一项是string或者number类型
        if (value === null) {
            arr = arr.filter(item => item !== filter);
            return !(new Set(arr).size === arr.length);
        } else {
            let newLength = arr.filter(item => item !== value).length;
            return arr.length - newLength > 1;
        }
    } else {
        //数组每一项是对象
        let map = {};
        arr.forEach(item => {
            if (key) {
                map.hasOwnProperty(item[key])
                    ? (map[item[key]] = true)
                    : (map[item[key]] = false);
            }
        });
        if (value === null) {
            for (let key in map) {
                if (key !== filter && map[key] === true) return true;
            }
            return false;
        } else {
            return value === filter ? false : !!map[value];
        }
    }
}