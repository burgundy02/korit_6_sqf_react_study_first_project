function PromiseTest() {
    /**
    * Promise 비동기 객체
    * 
    * 프로미스의 3가지 상태
    * 1. 대기 -> 이행되지도 거부되지도 않은 상태 /비동기 처리 로직이 아직 완료되지 않은 상태
    * 2. 이행 -> 연산이 성공했을 떄의 상태/  비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    * 3. 거부 -> 연산을 실패/ 비동기 처리가 실패하거나 오류가 발생한 상태
    * 
    * 프로미스에만 then, chatch등을 쓸 수 있음
     */
    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기(동기)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류!!!");
            }
            resolve(name);
        });
    }

    // 함수 자체가 프로미스 생성
    async function p2() {
        let a = null;
        try {
            // then의 리턴값을 a에 대입 / 동기처리 // await -> 이행할 때까지 기다려
            // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다.
            // await setTimeout(() => {}, 2000); -> 쓸 수 없음
            a = await p4();
    
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
           resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    const handleClick = () => {
        // then은 순서대로 간다(비동기 안에서의 동기)
        p1("p1")
        .then(result => {
            console.log("이행")
            console.log(result);
            if(true) {
                throw new Error("거부!!");  // 거부(reject)
            }
            return "두 번째 then"; // 이행(resolve)
           
        }) // 두 번째 then의 result
        .then(result => {
            console.log(result);

        }).catch(error => {
            // console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        // setTimeout안쓰고 2초 뒤에 실행하는 법
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            });
        }, 2000);
        
        // p3().then(r => console.log(r));
    }

    return (  
        <>
        <button onClick={handleClick}>promise</button>
        <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;