export default function userInput({onChange, userInput}){
    return <section id="user-input">
        <div className="input-group"> 
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="Number"
                required 
                value={userInput.initialInvestment}
                onChange={(event)=> 
                onChange("initialInvestment", event.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="Number" 
                required
                value={userInput.annualInvestment}
                onChange={(event)=> 
                    onChange("annualInvestment", event.target.value)}/>
            </p>
        </div>
        <div className="input-group"> 
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="Number" 
                required
                value={userInput.expectedReturn}
                onChange={(event)=> 
                    onChange("expectedReturn", event.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="Number" 
                required
                value={userInput.duration}
                onChange={(event)=> 
                    onChange("duration", event.target.value)}/>
            </p>
        </div>
    </section>
}