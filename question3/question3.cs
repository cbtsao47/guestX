using System;
using System.Collections.Generic;

namespace question3
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.Write("Enter a series of numbers separated by commas: ");
            string numbersInput = Console.ReadLine();
            string[] stringArr = numbersInput.Split(',');
            int[] numbersArr = Array.ConvertAll(stringArr, int.Parse);
            Console.WriteLine("Repeated numbers: ");
            Console.WriteLine(string.Join(", ", FindDuplicates(numbersArr).ToArray()));
        }
        public static List<int> FindDuplicates(int[] numberArr)
        {
            // create a cache dictionary
            Dictionary<int, int> cache = new Dictionary<int, int>();
            var result = new List<int>();
            // map the number as the key of the obj and increase the count of the value by 1
            for (int i = 0; i < numberArr.Length; i++)
            {
                if (cache.ContainsKey(numberArr[i]))
                {
                    cache[numberArr[i]]++;
                }
                else
                {
                    cache[numberArr[i]] = 1;
                }
            }
            // loop over the cache and add all the ones that are duplicated to result
            foreach (var key in cache.Keys)
            {
                if (cache[key] >= 2)
                {
                    result.Add(key);
                }
            }
            return result;
        }
    }
}


