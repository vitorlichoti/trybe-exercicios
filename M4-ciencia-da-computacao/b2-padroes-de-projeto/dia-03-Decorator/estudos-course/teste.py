def decompor_numeros1(dig):
    all_nums = [num for num in range(1000, dig * 1111)]
    result_arr = []
    for num in all_nums:
        milhar = num // 1000
        m_resto = num % 1000
        centena = m_resto // 100
        c_resto = m_resto % 100
        dezena = c_resto // 10
        d_resto = c_resto % 10
        unidade = d_resto
        if (milhar+centena+dezena+unidade) == 21:
            result_arr.append(num)
    print(result_arr)
